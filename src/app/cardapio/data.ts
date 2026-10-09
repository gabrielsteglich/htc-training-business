
export type LocalizedString = { pt: string; en: string };
export type Allergen = "gluten" | "lactose" | "amendoim" | "mariscos" | "soja" | "ovos" | "pimenta";

export const ALLERGEN_LABELS: Record<Allergen, LocalizedString> = {
  gluten: { pt: "Glúten", en: "Gluten" },
  lactose: { pt: "Lactose", en: "Lactose" },
  amendoim: { pt: "Amendoim", en: "Peanuts" },
  mariscos: { pt: "Mariscos", en: "Shellfish" },
  soja: { pt: "Soja", en: "Soy" },
  ovos: { pt: "Ovos", en: "Eggs" },
  pimenta: { pt: "Pimenta", en: "Spicy" },
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
    title: { pt: "Salgados", en: "Savory Snacks" },
    image: "/images/menu/salgados.png",
    items: [
      {
        id: "coxinha",
        name: { pt: "Coxinha de Frango", en: "Chicken Croquette" },
        description: { pt: "Massa crocante recheada com frango desfiado temperado e catupiry.", en: "Crispy dough filled with seasoned shredded chicken and cream cheese." },
        priceCents: 850,
        isAvailable: true,
        image: "/images/menu/salgados.png", // Using category image as fallback/placeholder if specific item image not available
        tags: [{ pt: "Clássico", en: "Classic" }, { pt: "Frito", en: "Fried" }],
        allergens: ["gluten", "lactose"],
      },
      {
        id: "empada",
        name: { pt: "Empada de Palmito", en: "Hearts of Palm Pot Pie" },
        description: { pt: "Massa podre que derrete na boca com recheio cremoso de palmito.", en: "Buttery pastry filled with creamy hearts of palm." },
        priceCents: 900,
        isAvailable: true,
        tags: [{ pt: "Vegetariano", en: "Vegetarian" }],
        allergens: ["gluten", "lactose", "ovos"],
      },
      {
        id: "kibe",
        name: { pt: "Kibe Recheado", en: "Stuffed Kibbeh" },
        description: { pt: "Kibe de carne bovina recheado com carne e especiarias.", en: "Beef kibbeh stuffed with seasoned ground beef and spices." },
        priceCents: 850,
        isAvailable: false,
        tags: [],
        allergens: ["gluten"],
      }
    ],
  },
  {
    id: "sanduiches",
    title: { pt: "Sanduíches", en: "Sandwiches" },
    image: "/images/menu/sanduiches.png",
    items: [
      {
        id: "natural-frango",
        name: { pt: "Sanduíche Natural de Frango", en: "Chicken Salad Sandwich" },
        description: { pt: "Pão integral, patê de frango, alface, tomate e cenoura.", en: "Whole wheat bread, chicken salad, lettuce, tomato, and carrot." },
        priceCents: 1450,
        isAvailable: true,
        tags: [{ pt: "Saudável", en: "Healthy" }, { pt: "Frio", en: "Cold" }],
        allergens: ["gluten", "lactose", "ovos"],
      },
      {
        id: "misto-quente",
        name: { pt: "Misto Quente", en: "Ham and Cheese Toast" },
        description: { pt: "Pão de forma tostado com presunto e queijo derretido.", en: "Toasted white bread with ham and melted cheese." },
        priceCents: 1200,
        isAvailable: true,
        tags: [{ pt: "Quente", en: "Hot" }],
        allergens: ["gluten", "lactose"],
      },
    ],
  },
  {
    id: "bebidas",
    title: { pt: "Bebidas", en: "Drinks" },
    image: "/images/menu/bebidas.png",
    items: [
      {
        id: "crystal-com-gas",
        name: { pt: "Água Mineral Crystal Com Gás", en: "Crystal Sparkling Mineral Water" },
        description: { pt: "Água mineral com gás - 350ml", en: "Sparkling mineral water - 350ml" },
        priceCents: 450,
        isAvailable: true,
        image: "/images/menu/bebidas/crystal-com-gas.jpg",
        tags: [{ pt: "Gelado", en: "Cold" }],
        allergens: [],
      },
      {
        id: "crystal-sem-gas",
        name: { pt: "Água Mineral Crystal Sem Gás", en: "Crystal Still Mineral Water" },
        description: { pt: "Água mineral sem gás - 350ml", en: "Still mineral water - 350ml" },
        priceCents: 400,
        isAvailable: true,
        image: "/images/menu/bebidas/crystal-sem-gas.jpg",
        tags: [{ pt: "Gelado", en: "Cold" }],
        allergens: [],
      },
      {
        id: "coca-cola",
        name: { pt: "Coca-Cola Original", en: "Coca-Cola Original" },
        description: { pt: "Refrigerante de cola - 200ml", en: "Classic cola soft drink - 200ml" },
        priceCents: 550,
        isAvailable: true,
        image: "/images/menu/bebidas/coca-cola.jpg",
        tags: [{ pt: "Gelado", en: "Cold" }],
        allergens: [],
      },
      {
        id: "coca-cola-zero",
        name: { pt: "Coca-Cola Sem Açúcar", en: "Coca-Cola Zero Sugar" },
        description: { pt: "Coca-Cola zero açúcar - 200ml", en: "Coca-Cola zero sugar - 200ml" },
        priceCents: 550,
        isAvailable: true,
        image: "/images/menu/bebidas/coca-cola-zero.jpg",
        tags: [{ pt: "Gelado", en: "Cold" }, { pt: "Sem Açúcar", en: "Sugar Free" }],
        allergens: [],
      },
      {
        id: "guarana-antarctica",
        name: { pt: "Guaraná Antarctica", en: "Guaraná Antarctica" },
        description: { pt: "Refrigerante de guaraná - 200ml", en: "Guaraná soft drink - 200ml" },
        priceCents: 550,
        isAvailable: true,
        image: "/images/menu/bebidas/guarana-antarctica.jpg",
        tags: [{ pt: "Gelado", en: "Cold" }],
        allergens: [],
      },
      {
        id: "guaraviton",
        name: { pt: "Guaraviton", en: "Guaraviton" },
        description: { pt: "Guaraná natural com gengibre - 500ml", en: "Natural guaraná with ginger - 500ml" },
        priceCents: 800,
        isAvailable: true,
        image: "/images/menu/bebidas/guaraviton.jpg",
        tags: [{ pt: "Gelado", en: "Cold" }, { pt: "Natural", en: "Natural" }],
        allergens: [],
      },
      {
        id: "guaravita",
        name: { pt: "Guaravita", en: "Guaravita" },
        description: { pt: "Guaraná natural - 290ml", en: "Natural guaraná - 290ml" },
        priceCents: 600,
        isAvailable: true,
        image: "/images/menu/bebidas/guaravita.jpg",
        tags: [{ pt: "Gelado", en: "Cold" }, { pt: "Natural", en: "Natural" }],
        allergens: [],
      },
    ],
  },
  {
    id: "doces",
    title: { pt: "Doces", en: "Sweets" },
    image: "/images/menu/doces.png",
    items: [
      {
        id: "brigadeiro",
        name: { pt: "Brigadeiro Gourmet", en: "Gourmet Brigadeiro" },
        description: { pt: "Tradicional doce brasileiro feito com chocolate belga.", en: "Traditional Brazilian sweet made with Belgian chocolate." },
        priceCents: 500,
        isAvailable: true,
        tags: [{ pt: "Chocolate Belga", en: "Belgian Chocolate" }],
        allergens: ["lactose"],
      },
      {
        id: "bolo-pote",
        name: { pt: "Bolo de Pote", en: "Cake in a Jar" },
        description: { pt: "Camadas de bolo e recheio cremoso. Sabores variados.", en: "Layers of cake and creamy filling. Assorted flavors." },
        priceCents: 1200,
        isAvailable: true,
        tags: [],
        allergens: ["gluten", "lactose", "ovos"],
      },
    ],
  },
  {
    id: "guloseimas",
    title: { pt: "Guloseimas", en: "Treats" },
    image: "/images/menu/guloseimas.png",
    items: [
      {
        id: "chocolate-barra",
        name: { pt: "Barra de Chocolate", en: "Chocolate Bar" },
        description: { pt: "Marcas variadas (Hershey's, Nestlé).", en: "Assorted brands (Hershey's, Nestlé)." },
        priceCents: 750,
        isAvailable: true,
        tags: [],
        allergens: ["lactose", "soja"],
      },
      {
        id: "balas",
        name: { pt: "Pacote de Balas", en: "Candy Pack" },
        description: { pt: "Balas de goma ou frutas.", en: "Gummy or fruit candies." },
        priceCents: 400,
        isAvailable: true,
        tags: [],
        allergens: [],
      },
    ],
  },
];
