import Image from "next/image";

type LogoProps = {
  variant?: "full" | "mark" | "badge" | "compact";
  className?: string;
  imgClassName?: string;
  showSubtitle?: boolean;
  priority?: boolean;
};

export default function Logo({
  variant = "full",
  className = "",
  imgClassName = "",
  showSubtitle = true,
  priority = true,
}: LogoProps) {
  if (variant === "mark") {
    return (
      <span className={`inline-flex items-center justify-center ${className}`}>
        <Image
          src="/logo.jpg"
          alt="FOLANET Sec Technology Logo"
          width={48}
          height={48}
          priority={priority}
          className={`h-10 w-10 rounded-xl object-cover shadow-sm ring-1 ring-white/20 transition-transform duration-200 hover:scale-105 ${imgClassName}`}
        />
      </span>
    );
  }

  if (variant === "badge") {
    return (
      <span
        className={`inline-flex items-center gap-3 rounded-2xl bg-white/5 p-2 pr-4 backdrop-blur ring-1 ring-white/10 ${className}`}
      >
        <Image
          src="/logo.jpg"
          alt="FOLANET Sec Technology Logo"
          width={52}
          height={52}
          priority={priority}
          className={`h-12 w-12 rounded-xl object-cover shadow-md ring-1 ring-orange-500/30 ${imgClassName}`}
        />
        <span className="flex flex-col leading-tight">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-orange-400">
            Sec Technology
          </span>
          <span className="text-lg font-black tracking-wider text-white">
            FOLANET
          </span>
        </span>
      </span>
    );
  }

  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <div className="relative flex-shrink-0">
        <Image
          src="/logo.jpg"
          alt="FOLANET Sec Technology Logo"
          width={44}
          height={44}
          priority={priority}
          className={`h-11 w-11 rounded-xl object-cover shadow-md ring-1 ring-white/20 transition-transform duration-200 group-hover:scale-105 ${imgClassName}`}
        />
      </div>
      <span className="flex flex-col leading-tight">
        {showSubtitle && (
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-orange-400">
            Sec Technology
          </span>
        )}
        <span className="text-lg font-black tracking-wider text-white">
          FOLANET
        </span>
      </span>
    </span>
  );
}