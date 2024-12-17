const CategoryList = () => {
  return (
    <div className="mb-20 mt-20">
      <h1 className="text-5xl font-extrabold">Job Category List</h1>
      <h4 className="text-base font-medium mt-2">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </h4>
      <div className="flex gap-8 mt-20">
        <div className="pl-3 bg-base-100 w-56 rounded-md shadow-xl">
          <img
            className="w-12 h-12"
            src="https://i.ibb.co.com/p2KnGn2/accounts.png"
            alt=""
          />
          <div className="my-2 text-left">
            <h2 className="mb-2">Account & Finance</h2>
            <h4 className="pb-5">300 Jobs Available</h4>
          </div>
        </div>
        <div className="pl-3 bg-base-100 w-56 rounded-md shadow-xl">
          <img
            className="w-12  h-12"
            src="https://i.ibb.co.com/cLZ8qGc/chip.png"
            alt=""
          />
          <div className="my-2 text-left">
            <h2 className="mb-2">Creative Design</h2>
            <h4 className="pb-5">100+ Jobs Available</h4>
          </div>
        </div>
        <div className="pl-3 bg-base-100 w-56 rounded-md shadow-xl">
          <img
            className="w-12  h-12"
            src="https://i.ibb.co.com/F4M9pS6/creative.png"
            alt=""
          />
          <div className="my-2 text-left">
            <h2 className="mb-2">Engineering Job</h2>
            <h4 className="pb-5">120 Jobs Available</h4>
          </div>
        </div>
        <div className="pl-3 bg-base-100 w-56 rounded-md shadow-xl">
          <img
            className="w-12  h-12"
            src="https://i.ibb.co.com/QkpdsQP/marketing.png"
            alt=""
          />
          <div className="my-2 text-left">
            <h2 className="mb-2">Marketing & Sales</h2>
            <h4 className="pb-5">150 Jobs Available</h4>
          </div>
        </div>
        <div className="pl-3 bg-base-100 w-56 rounded-md shadow-xl">
          <img
            className="w-12  h-12"
            src="https://i.ibb.co.com/p2KnGn2/accounts.png"
            alt=""
          />
          <div className="my-2 text-left">
            <h2 className="mb-2">Account & Finance</h2>
            <h4 className="pb-5">300 Jobs Available</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
