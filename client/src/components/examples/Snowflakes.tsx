import { Snowflakes } from "../Snowflakes";

export default function SnowflakesExample() {
  return (
    <div className="relative h-64 bg-gradient-to-b from-slate-900 to-slate-700 rounded-lg overflow-hidden">
      <Snowflakes />
      <p className="text-white text-center pt-24">Snowflakes Animation</p>
    </div>
  );
}
