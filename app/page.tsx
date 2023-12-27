import { doc } from "firebase/firestore";
import { useState } from "react";
import { json } from "stream/consumers";

// interface IRecipe {
//   name: string;
//   fields: string[];
//   createTime: string;
//   updateTime: string;
// }

interface IRecipe {
  documents: string[];
}

interface Data {
  recipes: IRecipe[];
}


async function getStaticProps() {
  const fetchedData = await fetch('https://firestore.googleapis.com/v1/projects/test-cfa6f/databases/(default)/documents/recipe');
  return fetchedData.json();
}

export default async function Home() {
  const parsedData = await getStaticProps();
  // parsedData.documents.forEach((document: any) => {
  //   const name = document.name;
  //   const title = document.fields.title.stringValue;
  //   const description = document.fields.description.stringValue;

  //   // Perform actions with the data (e.g., console.log)
  //   console.log(`Name: ${name}`);
  //   console.log(`Title: ${title}`);
  //   console.log(`Description: ${description}`);
  // })
  // console.log(parsedData);
  return (
    <div>
      <h1>Home</h1>
      <h2>titles: </h2>
      {
        parsedData?.documents.map((document: any) => (
          <div key={document.name}>
            <h4>{document.fields.title.stringValue}</h4>
            <h4>{document.fields.description.stringValue}</h4>
          </div>
        ))
      }
    </div>
  )
}
