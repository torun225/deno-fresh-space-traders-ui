import { JSX } from "preact";

interface propsDateInterface extends JSX.HTMLAttributes<HTMLDivElement> {
  selectList: string[];
  value?: string;
}

export function SelectInput(props: propsDateInterface) {
  return (
    <select
      name={props.name}
      class="select select-bordered"
      value={props.value}
    >
      {props.selectList.map((item) => (
        <option
          value={item}
        >
          {item}
        </option>
      ))}
    </select>
  );
}
