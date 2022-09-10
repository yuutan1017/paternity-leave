import React from 'react';
import Link from 'next/link';

export const InitialSentence = () => {
  return (
    <>
      <article className="mx-4 mt-16">
        <h1 className="text-2xl font-bold">
          あなたの育児休業給付金、自動で計算します。
        </h1>
        <div className="text-md text-left mt-10 border-[#1E2678]">
          <p>
            労働者が子育てするために休業する場合、育児休業給付金が受け取れます。
          </p>
          <p className='pb-1'>
            また、
            <b className="bg-[#FFF33F] inline bg-gradient-to-b from-white via-white pt-1 pb-0.5">
              育児休業期間中は社会保険料などの納付が免除されます。
            </b>
          </p>
        </div>
        <div className="mt-8 mb-2 text-left">
          赤ちゃんが産まれる時にもらえるお金や育児休業給付金をもらう条件など
          <br />
          詳しく知りたい方はこちらをご覧ください。
        </div>
        <div className="text-[12px] text-gray-500">
          <div className="flex flex-row hover:text-blue-400">
            <Link href="https://ninps.com/workstyle/work/archives/29">
              <a>
                参考 :
                育児休業給付金とは？申請・計算方法や延長できるケースまで、どこよりもわかりやすく解説
              </a>
            </Link>
          </div>
        </div>
      </article>
    </>
  );
};
