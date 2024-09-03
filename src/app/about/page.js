import { notFound } from "next/navigation";

export default function About({ searchParams}) {
  console.log('rendering about')

  if (searchParams['q']=== '404') {
    notFound()
  }

  return (
    <main>
      about
    </main>
  );
}
