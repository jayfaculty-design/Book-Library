import React from "react";

function Books() {
  return (
    <div className="min-h-screen bg-gray-100 pt-10 w-[100%]">
      <div className="flex items-center gap-2">
        <div className="bg-background h-1 w-[30px]"></div>
        <h1 className="font-bold text-6xl text-background">Books</h1>
      </div>

      <div className="pl-10 pt-10 pr-10 flex flex-col gap-10">
        <p className="text-3xl max-sm:text-[16px]">
          Welcome to School Library, your one-stop destination for exploring a
          vast collection of books that cater to readers of all ages and
          interests. Whether you're a student seeking knowledge, a curious mind
          diving into new genres, or simply someone who loves the comfort of
          reading, our library has something for everyone. At School Library, we
          believe in the power of books to educate, inspire, and transform
          lives. From timeless classics and contemporary bestsellers to
          educational resources and niche subjects, our collection is curated to
          provide a rich and fulfilling reading experience.
        </p>
        <button className="btn btn-wide text-oranges hover:bg-primary hover:text-background">
          Explore our books
        </button>
      </div>
    </div>
  );
}

export default Books;
