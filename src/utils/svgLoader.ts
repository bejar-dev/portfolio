// Importar TODOS los SVGs como raw strings en build-time
const svgModules = import.meta.glob<string>(
  '../assets/icons/*.svg',
  { as: 'raw', eager: true }
);

// Mapeo: nombre archivo → contenido SVG
export const svgMap = Object.entries(svgModules).reduce(
  (acc, [path, content]) => {
    const name = path.match(/\/([^/]+)\.svg$/)?.[1] || '';
    return { ...acc, [name]: content };
  },
  {} as Record<string, string>
);

export const getSvg = (name: string): string | null => {
  return svgMap[name] || null;
};

// Debug: listar SVGs disponibles en desarrollo
if (import.meta.env.DEV) {
  console.log('📦 SVG Icons loaded:', Object.keys(svgMap));
}
