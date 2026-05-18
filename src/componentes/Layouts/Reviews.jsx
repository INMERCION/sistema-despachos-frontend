const partnerCompanies = [
  { name: "Apple", mark: "A" },
  { name: "HyperX", mark: "HX" },
  { name: "Logitech G", mark: "LG" },
];

function Reviews() {
  return (
    <div className="bg-white sm:py-10">
      <div className="mx-auto text-center">
        <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
          Empresas que confian en nosotros
        </h2>
        <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {partnerCompanies.map((company) => (
            <div
              key={company.name}
              className="flex items-center justify-center gap-4 rounded-2xl border border-gray-200 bg-gray-50 px-6 py-5 shadow-sm"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-500 font-bold text-white">
                {company.mark}
              </div>
              <span className="text-base font-medium text-gray-700">
                {company.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Reviews;
