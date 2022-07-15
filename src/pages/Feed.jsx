/* This example requires Tailwind CSS v2.0+ */
import { CheckIcon, ThumbUpIcon, UserIcon } from "@heroicons/react/solid";
import Footer from "../components/Footer";
import HeaderFragment from "../components/HeaderFragment";
import HeaderLine from "../components/FeedHeader";
import FeedHeader from "../components/FeedHeader";

const timeline = [
  {
    id: 1,
    content: "LLAMADA DE DESCUBRIMIENTO",
    target:
      "Llámanos mandanos un whats, te tomará menos de un minuto conseguir un experto.",
    href: "#",
    date: "Paso 01",
    datetime: "Paso 01",
    icon: UserIcon,
    iconBackground: "bg-gray-400",
  },
  {
    id: 2,
    content: "DIAGNÓSTICO",
    target:
      "Nuestros expertos en el sector revisarán detalladamente tusituación de cumplimiento regulatorio ante ASEA y te daránuna línea de tiempo diseñada especialmente para ti.",
    href: "#",
    date: "Paso 02",
    datetime: "Paso 02",
    icon: ThumbUpIcon,
    iconBackground: "bg-blue-500",
  },
  {
    id: 3,
    content: "ALTERNATIVAS",
    target:
      "Te presentamos las mejores alternativas del mercado yaque no tenemos compromisos de exclusividad con ninguna aseguradora.",
    href: "#",
    date: "Paso 03",
    datetime: "Paso 03",
    icon: CheckIcon,
    iconBackground: "bg-green-500",
  },
  {
    id: 4,
    content: "CONTRATACIÓN",
    target:
      "Nosotros realizamos todo el proceso de contratación y nos aseguramos de que recibas a tiempo tu póliza y tu factura",
    href: "#",
    date: "Paso 04",
    datetime: "Paso 04",
    icon: ThumbUpIcon,
    iconBackground: "bg-blue-500",
  },
  {
    id: 5,
    content: "GESTIÓN Y SEGUIMIENTO",
    target: "Te ayudamos con el proceso de registro ante la ASEA.",
    href: "#",
    date: "Paso 05",
    datetime: "Paso 05",
    icon: CheckIcon,
    iconBackground: "bg-green-500",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Feed() {
  return (
    <>
      <HeaderFragment />
      <FeedHeader />
      <div className="max-w-7xl mx-auto px-4 pt-10 sm:px-6 lg:px-8">
        {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
        <div className="max-w-3xl mx-auto">
          {/* Content goes here */}
          <div className="flow-root">
            <ul role="list" className="-mb-8">
              {timeline.map((event, eventIdx) => (
                <li key={event.id}>
                  <div className="relative pb-8">
                    {eventIdx !== timeline.length - 1 ? (
                      <span
                        className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                        aria-hidden="true"
                      />
                    ) : null}
                    <div className="relative flex space-x-3">
                      <div>
                        <span
                          className={classNames(
                            event.iconBackground,
                            "h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white"
                          )}
                        >
                          <event.icon
                            className="h-5 w-5 text-white"
                            aria-hidden="true"
                          />
                        </span>
                      </div>
                      <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                        <div>
                          <p className="text-sm text-gray-500">
                            {event.content}{" "}
                            <a
                              href={event.href}
                              className="font-medium text-gray-900"
                            >
                              {event.target}
                            </a>
                          </p>
                        </div>
                        <div className="text-right text-sm whitespace-nowrap text-gray-500">
                          <time dateTime={event.datetime}>{event.date}</time>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
