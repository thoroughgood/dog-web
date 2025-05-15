export default function Custom404() {
  return (
    <div className="max-w-6xl mt-12">
      <div className="text-4xl font-bold text-red-600 pl-4">
        {' '}
        Uh oh! You're not supposed to be here.
      </div>
      <div className="text-red-600 text-lg p-4">
        {' '}
        Check that the breed is spelt correctly or redirect yourself
        to the breed through the home page.
      </div>
    </div>
  );
}
