// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { ethers } from "ethers";
import abi from "../../components/abi/abi.json";


type Data = {
  name: string
}


// Check if the user have an NFT
export default async (req: any, res: any) => {
	if (req.method !== "POST") {
		res.status(405).json({ message: "Method not allowed" });
	}


	// Connect to the contract
	const contractAddress = "0xBE082c1D60452B9B39f4A36883f1746cE37F332f";
	const provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL);
	const contract = new ethers.Contract(contractAddress, abi, provider);
  
	try {
    let images: any = [];
    for (let i=0; i<6; i++){
		// Call the view function to check if the user have an NFT
		const metadataLink = await contract.tokenURI(i);
    const rawMetadata = await fetch(metadataLink);
    const metadata = await rawMetadata.json();
    images.push(metadata.image)
  }
  console.log (images)
  return res.json({ images: images })

		// Return the result
	} catch (e) {
		console.log("ERROR: " + e);
		res.status(500).json({ error: JSON.stringify(e) });
	}


};