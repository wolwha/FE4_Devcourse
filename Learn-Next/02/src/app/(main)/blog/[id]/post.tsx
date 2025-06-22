export default async function post({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const {id} = await params;
  return (
    <>
      <h1>{id}</h1>
    </>
  );
}
