import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";
import { services } from "@/data/services";

export const ServicesCarousel = () => {
  const [activeId, setActiveId] = useState(services[0].id);
  const [offset, setOffset] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const [visibleCount, setVisibleCount] = useState(3);

  const CARD_WIDTH = 280;
  const GAP = 16;

  useEffect(() => {
    const update = () => {
      if (!trackRef.current) return;
      const w = trackRef.current.parentElement?.offsetWidth ?? 0;
      setVisibleCount(Math.max(1, Math.floor((w + GAP) / (CARD_WIDTH + GAP))));
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxOffset = Math.max(0, services.length - visibleCount);
  const activeIndex = services.findIndex((s) => s.id === activeId);
  const activeService = services[activeIndex];

  const goTo = (i: number) => {
    setOffset(Math.min(Math.max(0, i), maxOffset));
  };

  const handleCardClick = (id: string, index: number) => {
    setActiveId(id);
    if (index >= offset + visibleCount) goTo(index - visibleCount + 1);
    else if (index < offset) goTo(index);
  };

  return (
    <div className="w-full font-sans ">
      {/* ── Track ── */}
      <div className="overflow-hidden" ref={trackRef}>
        <div
          className="flex gap-4 transition-transform duration-400 ease-in-out"
          style={{
            transform: `translateX(-${offset * (CARD_WIDTH + GAP)}px)`,
          }}>
          {services.map((service, i) => {
            const isActive = service.id === activeId;
            return (
              <div
                key={service.id}
                onClick={() => handleCardClick(service.id, i)}
                className={`
                  flex-shrink-0 cursor-pointer rounded-xl border bg-card p-5
                  flex flex-col gap-3 transition-all duration-200
                  ${
                    isActive
                      ? "border-primary shadow-md shadow-primary/10"
                      : "border-border hover:border-border/80 hover:shadow-sm"
                  }
                `}
                style={{ width: CARD_WIDTH }}>
                {/* Icon + Title */}
                <div className="flex items-start gap-3">
                  <div
                    className={`
                    w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0
                    ${isActive ? "bg-primary/10" : "bg-muted"}
                  `}>
                    <service.icon
                      className={`w-5 h-5 ${isActive ? "text-primary" : "text-muted-foreground"}`}
                    />
                  </div>
                  <p className="text-sm font-semibold text-foreground leading-snug pt-0.5">
                    {service.title}
                  </p>
                </div>

                {/* Short description */}
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {service.shortDescription}
                </p>

                {/* Benefit tags */}
                <div className="flex flex-wrap gap-1.5">
                  {service.benefits.slice(0, 2).map((b, j) => (
                    <span
                      key={j}
                      className="text-[10px] px-2 py-0.5 rounded-full bg-muted text-muted-foreground border border-border">
                      {b}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Nav ── */}
      <div className="flex items-center gap-3 mt-4">
        <button
          onClick={() => goTo(offset - 1)}
          disabled={offset === 0}
          className="w-8 h-8 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:bg-muted transition-colors disabled:opacity-30 disabled:cursor-not-allowed">
          <ChevronLeft className="w-4 h-4" />
        </button>

        <div className="flex gap-1.5 flex-1">
          {services.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`h-1.5 rounded-full transition-all duration-200 ${
                i === offset
                  ? "w-5 bg-primary"
                  : "w-1.5 bg-border hover:bg-muted-foreground"
              }`}
            />
          ))}
        </div>

        <button
          onClick={() => goTo(offset + 1)}
          disabled={offset >= maxOffset}
          className="w-8 h-8 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:bg-muted transition-colors disabled:opacity-30 disabled:cursor-not-allowed">
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* ── Detail Panel ── */}
      {activeService && (
        <div className="mt-6 rounded-xl border border-border bg-card overflow-hidden">
          {/* Header */}
          <div className="flex items-center gap-3 px-5 py-4 border-b border-border">
            <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <activeService.icon className="w-4.5 h-4.5 text-primary" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">
                {activeService.title}
              </p>
              <p className="text-xs text-muted-foreground line-clamp-1">
                {activeService.description}
              </p>
            </div>
          </div>

          {/* Body */}
          <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border">
            {/* Benefits */}
            <div className="p-5">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                Benefits
              </p>
              <ul className="space-y-2">
                {activeService.benefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Features */}
            <div className="p-5">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                Features
              </p>
              <ul className="space-y-2">
                {activeService.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                    <span className="text-sm text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServicesCarousel;
