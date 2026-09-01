import { InkRule } from "@/components/motion/reveal";

type RuledSubheadProps = {
  children: string;
  className?: string;
};

export function RuledSubhead({ children, className = "" }: RuledSubheadProps) {
  return (
    <h3 className={`ruled-subhead ${className}`.trim()}>
      <span className="ruled-subhead-label">
        {children}
        <InkRule />
      </span>
    </h3>
  );
}
