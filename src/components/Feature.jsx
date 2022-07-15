/* This example requires Tailwind CSS v2.0+ */
import {
  CloudUploadIcon,
  CogIcon,
  LockClosedIcon,
  RefreshIcon,
  ServerIcon,
  ShieldCheckIcon,
} from "@heroicons/react/outline";

const features = [
  {
    name: "EXPENDIO DE GASOLINA",
    description:
      "RC: Responsabilidad civil RA: Responsabilidad por daño Ambiental. LR: Límite de Responsabilidad combinado $275,000.00 USD, por evento.",
    icon: CloudUploadIcon,
  },
  {
    name: "EXPENDIO DE GAS NATURAL",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: LockClosedIcon,
  },
  {
    name: "TRANSPORTE DEGASOLINAS",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: RefreshIcon,
  },
  {
    name: "ALMACENAMIENTO",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: ShieldCheckIcon,
  },
  {
    name: "DISTRIBUCIÓN DE GN Y PETROLÓFEROS",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: CogIcon,
  },
  {
    name: "REGISTRO Y ACTUALIZACIÓN",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: ServerIcon,
  },
];

export default function Example() {
  return (
    <div className="relative bg-gray-100 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-base font-semibold uppercase tracking-wider text-teal-600">
          IKTAN PROTECT
        </h2>
        <p className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          ASEA PÓLIZAS{" "}
        </p>
        <p className="mx-auto mt-5 max-w-prose text-xl text-gray-500">
          El 23 de julio de 2018 cambió la forma de gestionar los riesgos en
          nuestro sector, la Agencia de Seguridad, Energía y Ambiente ASEA,
          emitió los Lineamientos para el requerimiento mínimo de los seguros
          para actividades de transporte, almacenamiento, distribución,
          compresión, descompresión, licuefacción, regasificación o expendio al
          público de hidrocarburos o petrolíferos
        </p>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6">
                <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center rounded-md bg-teal-500 p-3 shadow-lg">
                        <feature.icon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">
                      {feature.name}
                    </h3>
                    <p className="mt-5 text-base text-gray-500">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
