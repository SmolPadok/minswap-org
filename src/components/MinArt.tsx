import * as React from 'react';
import Image from 'next/image';

import minswapNFTJapan from 'src/assets/minswap-nft-japan.jpg';

import { Button } from './Button';
import { ArrowRightIcon } from './icons';
import { SectionTitle } from './SectionTitle';

type MinArt = {
  title: string;
  content: string;
  image: StaticImageData;
};

const mainArt: MinArt = {
  title: 'Unbank The World NFT',
  content:
    'Unbank The World is our NFT giveaway campaign to promote Minswap to communities from all over the world. Followers of our social media pages stand a chance to win one out of 10 copies of exclusive NFT artworks featuring Catdano in their many adventures throughout the world!',
  image: minswapNFTJapan,
};

export function MinArt() {
  return (
    <div className="flex flex-col items-center">
      <SectionTitle subTitle="Art">MinArt</SectionTitle>

      <div className="flex flex-row p-10 mt-10 shadow-2xl gap-x-16 rounded-[20px]">
        <Image alt="Logo" height="420" src={mainArt.image} width="337" />

        <div className="w-[523px] flex flex-col">
          <div className="text-3xl font-bold">{mainArt.title}</div>

          <div className="mt-4 text-xl text-trueGray-500">{mainArt.content}</div>

          <div className="flex-1" />

          <div className="flex gap-x-4">
            <a href="https://twitter.com/MinswapDEX/status/1398683903255326726" rel="noreferrer" target="_blank">
              <Button color="primary" size="lg">
                Learn more <ArrowRightIcon />
              </Button>
            </a>
            {/* LONG: I don't know what to link to, so I hide it. */}
            {/* <Button size="lg">Previous drops</Button> */}
          </div>
        </div>
      </div>
    </div>
  );
}