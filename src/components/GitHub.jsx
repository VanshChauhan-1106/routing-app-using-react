import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
function GitHub() {
  //   const [data, setData] = useState([]);

  //   useEffect(() => {
  //     fetch("https://api.github.com/users/vanshchauhan-1106")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       });
  //   }, []);

  const data = useLoaderData();

  return (
    <div className="flex justify-center bg-gray-600 text-white p-5">
      <img
        src={data.avatar_url}
        alt="Github Pic"
        width={200}
        className="rounded-full border-white border-2 p-1 mr-5"
      />
      <div className="text-start">
        <h1 className="text-3xl">
          {data.name} <p className="text-lg inline">( {data.login} )</p>
        </h1>
        <p>{data.bio}</p>
        <a href={data.html_url} target="_blank">
          <button className="bg-orange-600 border-none rounded-lg py-1 px-5 mt-2 hover:bg-orange-500 active:bg-orange-700">
            Visit
          </button>
        </a>
      </div>
    </div>
  );
}

export default GitHub;

export const getGithubInfo = async () => {
  const response = await fetch(
    "https://api.github.com/users/vanshchauhan-1106"
  );
  return response.json();
};
