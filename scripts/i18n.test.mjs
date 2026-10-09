import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import { runInNewContext } from 'node:vm';
import test from 'node:test';
import ts from 'typescript';

const require = createRequire(import.meta.url);
const root = new URL('../', import.meta.url);
const cache = new Map();

// Read and transpile the content modules in memory; never rewrite source files.
function loadContent(path) {
  if (cache.has(path)) return cache.get(path);
  const source = new TextDecoder('utf-8', { fatal: true }).decode(readFileSync(new URL(path, root)));
  const { outputText } = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS } });
  const exports = {};
  runInNewContext(outputText, {
    exports,
    require: (specifier) => specifier === './content/es' ? loadContent('src/content/es.ts') : require(specifier),
  }, { filename: fileURLToPath(new URL(path, root)) });
  cache.set(path, exports);
  return exports;
}

const { CONTENT } = loadContent('src/constants.ts');
const { UI_TEXT, LOCALES } = loadContent('src/lib/i18n.ts');
const { MENU_DATA, ALLERGEN_LABELS } = loadContent('src/app/cardapio/data.ts');

function checkShape(reference, translated, path = '') {
  if (typeof reference === 'string') {
    assert.equal(typeof translated, 'string', path);
    if (reference) assert.ok(translated.trim(), `Missing translation: ${path}`);
    return;
  }
  if (Array.isArray(reference)) {
    assert.ok(Array.isArray(translated), path);
    assert.equal(translated.length, reference.length, path);
    reference.forEach((value, index) => checkShape(value, translated[index], `${path}[${index}]`));
    return;
  }
  if (reference && typeof reference === 'object') {
    assert.ok(translated && typeof translated === 'object', path);
    assert.equal(JSON.stringify(Object.keys(translated).sort()), JSON.stringify(Object.keys(reference).sort()), path);
    for (const key of Object.keys(reference)) {
      if (key !== 'icon') checkShape(reference[key], translated[key], `${path}.${key}`);
    }
  }
}

test('Spanish covers every Portuguese content field and UI message', () => {
  checkShape(CONTENT.pt, CONTENT.es, 'CONTENT.es');
  checkShape(UI_TEXT.pt, UI_TEXT.es, 'UI_TEXT.es');
  checkShape(UI_TEXT.pt, UI_TEXT.en, 'UI_TEXT.en');
  assert.equal(LOCALES.es, 'es');
});

test('All menu labels, products, tags and allergens include Spanish', () => {
  const check = (value) => assert.ok(value.es?.trim());
  MENU_DATA.forEach((category) => {
    check(category.title);
    category.items.forEach((item) => { check(item.name); check(item.description); item.tags.forEach(check); });
  });
  Object.values(ALLERGEN_LABELS).forEach(check);
});

test('Spanish preserves the approved course information', () => {
  const crm = CONTENT.es.courses_list.find((course) => course.id === 'crm');
  const dgr = CONTENT.es.courses_list.find((course) => course.id === 'dgr');
  assert.match(crm.duration, /16 h.*8 h/);
  assert.match(crm.audience, /corporativo/);
  assert.equal(dgr.duration, 'Inicial / Recurrente');
  for (const course of CONTENT.es.courses_list) {
    assert.ok(!course.delivery.some((delivery) => /híbrido/i.test(delivery)));
    if (course.id !== 'qsms') assert.match(course.syllabus[0], /plan de estudios vigente de la ANAC/);
  }
});

test('Translation source files contain valid UTF-8 without corrupted accents', () => {
  for (const path of ['src/constants.ts', 'src/content/es.ts', 'src/lib/i18n.ts', 'src/app/cardapio/data.ts']) {
    const source = new TextDecoder('utf-8', { fatal: true }).decode(readFileSync(new URL(path, root)));
    assert.doesNotMatch(source, /\uFFFD|\u00C3[\u0080-\u00BF]|\u00C2[\u0080-\u00BF]|\u00E2\u20AC|\u00F0\u0178/, path);
  }
});
