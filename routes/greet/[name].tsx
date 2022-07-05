/** @jsx h */
import { h } from "preact";
import { PageProps } from "$fresh/server.ts";

export default function Greet(props: PageProps) {
  const { name } = props.params;
  return <div>Greetings to you, {name}!</div>;
}
