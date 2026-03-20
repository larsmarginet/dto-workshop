import type { Image } from "~/types/shared";

export type CardProps = {
  title: string;
  image: Image;
  description: string;
  className?: string;
  action: {
    callback: () => void;
    label: string;
  };
};

export function Card({
  title,
  image,
  description,
  className = "",
  action,
}: CardProps) {
  return (
    <article
      className={`flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md dark:border-gray-800 dark:bg-gray-900 ${className}`}
    >
      <div className="relative h-100 w-full shrink-0 bg-gray-100 dark:bg-gray-800">
        <img
          src={image.url}
          alt={image.alt}
          width={image.width}
          height={image.height}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <h2 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-gray-50">
          {title}
        </h2>

        <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
          {description}
        </p>

        <button
          type="button"
          onClick={action.callback}
          className="rounded-lg cursor-pointer bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-900 transition-colors hover:bg-emerald-100 dark:bg-emerald-950/50 dark:text-emerald-100 dark:hover:bg-emerald-900/40"
        >
          {action.label}
        </button>
      </div>
    </article>
  );
}
