import Divider from "./divider";

function Title({ children }: { children?: React.ReactNode }) {
  return (
    <div className="flex flex-col w-full gap-2">
      <h2 className="text-center text-3xl font-bold">{children}</h2>
      <Divider />
    </div>
  );
}

export default Title;
