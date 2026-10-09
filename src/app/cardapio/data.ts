
export type LocalizedString = { pt: string; en: string; es: string };
export type Allergen = "gluten" | "lactose" | "amendoim" | "mariscos" | "soja" | "ovos" | "pimenta";

export const ALLERGEN_LABELS: Record<Allergen, LocalizedString> = {
  gluten: { pt: "Glúten", en: "Gluten", es: "Gluten" },
  lactose: { pt: "Lactose", en: "Lactose", es: "Lactosa" },
  amendoim: { pt: "Amendoim", en: "Peanuts", es: "Cacahuetes" },
  mariscos: { pt: "Mariscos", en: "Shellfish", es: "Mariscos" },
  soja: { pt: "Soja", en: "Soy", es: "Soja" },
  ovos: { pt: "Ovos", en: "Eggs", es: "Huevos" },
  pimenta: { pt: "Pimenta", en: "Spicy", es: "Picante" },
};

export interface MenuItem {
  id: string;
  name: LocalizedString;
  description: LocalizedString;
  priceCents: number;
  image?: string;
  isAvailable: boolean;
  tags: LocalizedString[];
  allergens: Allergen[];
}

export interface MenuCategory {
  id: string;
  title: LocalizedString;
  image: string;
  items: MenuItem[];
}

export const MENU_DATA: MenuCategory[] = [
  {
    id: "salgados",
    title: { pt: "Salgados", en: "Savory Snacks", es: "Aperitivos salados" },
    image: "/images/menu/salgados.png",
    items: [
      {
        id: "coxinha",
        name: { pt: "Coxinha de Frango", en: "Chicken Croquette", es: "Coxinha de pollo" },
        description: { pt: "Massa crocante recheada com frango desfiado temperado e catupiry.", en: "Crispy dough filled with seasoned shredded chicken and cream cheese.", es: "Masa crujiente rellena de pollo desmenuzado y sazonado con queso cremoso catupiry." },
        priceCents: 850,
        isAvailable: true,
        image: "/images/menu/salgados.png", // Using category image as fallback/placeholder if specific item image not available
        tags: [{ pt: "Clássico", en: "Classic", es: "Clásico" }, { pt: "Frito", en: "Fried", es: "Frito" }],
        allergens: ["gluten", "lactose"],
      },
      {
        id: "empada",
        name: { pt: "Empada de Palmito", en: "Hearts of Palm Pot Pie", es: "Empanada de palmito" },
        description: { pt: "Massa podre que derrete na boca com recheio cremoso de palmito.", en: "Buttery pastry filled with creamy hearts of palm.", es: "Masa quebrada que se deshace en la boca con un relleno cremoso de palmito." },
        priceCents: 900,
        isAvailable: true,
        tags: [{ pt: "Vegetariano", en: "Vegetarian", es: "Vegetariano" }],
        allergens: ["gluten", "lactose", "ovos"],
      },
      {
        id: "kibe",
        name: { pt: "Kibe Recheado", en: "Stuffed Kibbeh", es: "Kibbeh relleno" },
        description: { pt: "Kibe de carne bovina recheado com carne e especiarias.", en: "Beef kibbeh stuffed with seasoned ground beef and spices.", es: "Kibbeh de carne de res relleno de carne sazonada y especias." },
        priceCents: 850,
        isAvailable: false,
        tags: [],
        allergens: ["gluten"],
      }
    ],
  },
  {
    id: "sanduiches",
    title: { pt: "Sanduíches", en: "Sandwiches", es: "Sándwiches" },
    image: "/images/menu/sanduiches.png",
    items: [
      {
        id: "natural-frango",
        name: { pt: "Sanduíche Natural de Frango", en: "Chicken Salad Sandwich", es: "Sándwich de ensalada de pollo" },
        description: { pt: "Pão integral, patê de frango, alface, tomate e cenoura.", en: "Whole wheat bread, chicken salad, lettuce, tomato, and carrot.", es: "Pan integral, ensalada de pollo, lechuga, tomate y zanahoria." },
        priceCents: 1450,
        isAvailable: true,
        tags: [{ pt: "Saudável", en: "Healthy", es: "Saludable" }, { pt: "Frio", en: "Cold", es: "Frío" }],
        allergens: ["gluten", "lactose", "ovos"],
      },
      {
        id: "misto-quente",
        name: { pt: "Misto Quente", en: "Ham and Cheese Toast", es: "Sándwich caliente de jamón y queso" },
        description: { pt: "Pão de forma tostado com presunto e queijo derretido.", en: "Toasted white bread with ham and melted cheese.", es: "Pan de molde tostado con jamón y queso fundido." },
        priceCents: 1200,
        isAvailable: true,
        tags: [{ pt: "Quente", en: "Hot", es: "Caliente" }],
        allergens: ["gluten", "lactose"],
      },
    ],
  },
  {
    id: "bebidas",
    title: { pt: "Bebidas", en: "Drinks", es: "Bebidas" },
    image: "/images/menu/bebidas.png",
    items: [
      {
        id: "crystal-com-gas",
        name: { pt: "Água Mineral Crystal Com Gás", en: "Crystal Sparkling Mineral Water", es: "Agua mineral Crystal con gas" },
        description: { pt: "Água mineral com gás - 350ml", en: "Sparkling mineral water - 350ml", es: "Agua mineral con gas - 350 ml" },
        priceCents: 450,
        isAvailable: true,
        image: "/images/menu/bebidas/crystal-com-gas.jpg",
        tags: [{ pt: "Gelado", en: "Cold", es: "Frío" }],
        allergens: [],
      },
      {
        id: "crystal-sem-gas",
        name: { pt: "Água Mineral Crystal Sem Gás", en: "Crystal Still Mineral Water", es: "Agua mineral Crystal sin gas" },
        description: { pt: "Água mineral sem gás - 350ml", en: "Still mineral water - 350ml", es: "Agua mineral sin gas - 350 ml" },
        priceCents: 400,
        isAvailable: true,
        image: "/images/menu/bebidas/crystal-sem-gas.jpg",
        tags: [{ pt: "Gelado", en: "Cold", es: "Frío" }],
        allergens: [],
      },
      {
        id: "coca-cola",
        name: { pt: "Coca-Cola Original", en: "Coca-Cola Original", es: "Coca-Cola Original" },
        description: { pt: "Refrigerante de cola - 200ml", en: "Classic cola soft drink - 200ml", es: "Refresco de cola - 200 ml" },
        priceCents: 550,
        isAvailable: true,
        image: "/images/menu/bebidas/coca-cola.jpg",
        tags: [{ pt: "Gelado", en: "Cold", es: "Frío" }],
        allergens: [],
      },
      {
        id: "coca-cola-zero",
        name: { pt: "Coca-Cola Sem Açúcar", en: "Coca-Cola Zero Sugar", es: "Coca-Cola sin azúcar" },
        description: { pt: "Coca-Cola zero açúcar - 200ml", en: "Coca-Cola zero sugar - 200ml", es: "Coca-Cola sin azúcar - 200 ml" },
        priceCents: 550,
        isAvailable: true,
        image: "/images/menu/bebidas/coca-cola-zero.jpg",
        tags: [{ pt: "Gelado", en: "Cold", es: "Frío" }, { pt: "Sem Açúcar", en: "Sugar Free", es: "Sin azúcar" }],
        allergens: [],
      },
      {
        id: "guarana-antarctica",
        name: { pt: "Guaraná Antarctica", en: "Guaraná Antarctica", es: "Guaraná Antarctica" },
        description: { pt: "Refrigerante de guaraná - 200ml", en: "Guaraná soft drink - 200ml", es: "Refresco de guaraná - 200 ml" },
        priceCents: 550,
        isAvailable: true,
        image: "/images/menu/bebidas/guarana-antarctica.jpg",
        tags: [{ pt: "Gelado", en: "Cold", es: "Frío" }],
        allergens: [],
      },
      {
        id: "guaraviton",
        name: { pt: "Guaraviton", en: "Guaraviton", es: "Guaraviton" },
        description: { pt: "Guaraná natural com gengibre - 500ml", en: "Natural guaraná with ginger - 500ml", es: "Guaraná natural con jengibre - 500 ml" },
        priceCents: 800,
        isAvailable: true,
        image: "/images/menu/bebidas/guaraviton.jpg",
        tags: [{ pt: "Gelado", en: "Cold", es: "Frío" }, { pt: "Natural", en: "Natural", es: "Natural" }],
        allergens: [],
      },
      {
        id: "guaravita",
        name: { pt: "Guaravita", en: "Guaravita", es: "Guaravita" },
        description: { pt: "Guaraná natural - 290ml", en: "Natural guaraná - 290ml", es: "Guaraná natural - 290 ml" },
        priceCents: 600,
        isAvailable: true,
        image: "/images/menu/bebidas/guaravita.jpg",
        tags: [{ pt: "Gelado", en: "Cold", es: "Frío" }, { pt: "Natural", en: "Natural", es: "Natural" }],
        allergens: [],
      },
    ],
  },
  {
    id: "doces",
    title: { pt: "Doces", en: "Sweets", es: "Dulces" },
    image: "/images/menu/doces.png",
    items: [
      {
        id: "brigadeiro",
        name: { pt: "Brigadeiro Gourmet", en: "Gourmet Brigadeiro", es: "Brigadeiro gourmet" },
        description: { pt: "Tradicional doce brasileiro feito com chocolate belga.", en: "Traditional Brazilian sweet made with Belgian chocolate.", es: "Dulce tradicional brasileño elaborado con chocolate belga." },
        priceCents: 500,
        isAvailable: true,
        tags: [{ pt: "Chocolate Belga", en: "Belgian Chocolate", es: "Chocolate belga" }],
        allergens: ["lactose"],
      },
      {
        id: "bolo-pote",
        name: { pt: "Bolo de Pote", en: "Cake in a Jar", es: "Pastel en tarro" },
        description: { pt: "Camadas de bolo e recheio cremoso. Sabores variados.", en: "Layers of cake and creamy filling. Assorted flavors.", es: "Capas de pastel y relleno cremoso. Sabores variados." },
        priceCents: 1200,
        isAvailable: true,
        tags: [],
        allergens: ["gluten", "lactose", "ovos"],
      },
    ],
  },
  {
    id: "guloseimas",
    title: { pt: "Guloseimas", en: "Treats", es: "Golosinas" },
    image: "/images/menu/guloseimas.png",
    items: [
      {
        id: "chocolate-barra",
        name: { pt: "Barra de Chocolate", en: "Chocolate Bar", es: "Tableta de chocolate" },
        description: { pt: "Marcas variadas (Hershey's, Nestlé).", en: "Assorted brands (Hershey's, Nestlé).", es: "Marcas variadas (Hershey's, Nestlé)." },
        priceCents: 750,
        isAvailable: true,
        tags: [],
        allergens: ["lactose", "soja"],
      },
      {
        id: "balas",
        name: { pt: "Pacote de Balas", en: "Candy Pack", es: "Paquete de caramelos" },
        description: { pt: "Balas de goma ou frutas.", en: "Gummy or fruit candies.", es: "Caramelos de goma o de frutas." },
        priceCents: 400,
        isAvailable: true,
        tags: [],
        allergens: [],
      },
    ],
  },
];
