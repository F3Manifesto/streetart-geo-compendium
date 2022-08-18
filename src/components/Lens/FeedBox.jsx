import React, {useContext, useState, createContext, useEffect} from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { VscChromeMinimize } from 'react-icons/vsc';
import { HiArrowsExpand } from 'react-icons/hi'
import { contextApi } from '../../pages/_app';
import Draggable from "react-draggable";
import Feed from './Feed';
import FeedSearch from './FeedSearch';
import { client, randomPublications } from '../../clients/lens/api';
import {FiRefreshCcw} from 'react-icons/fi';


export const feedApi = createContext();


function FeedBox() {

  const data = useContext(contextApi);

  const [publicationsFeed, setPublicationsFeed] = useState([]);

  const [pageInfo, setPageInfo] = useState();

    async function fetchPublications() {
        try {
            const response = await client.query(randomPublications, {
                request: {
                    sortCriteria: 'TOP_MIRRORED', 
                    publicationTypes: ['POST'], 
                    limit: 30,
                    noRandomize: true,
                }
            }).toPromise();
            const arr = response.data.explorePublications.items;
            const sortedArr = arr.sort((a,b) => Date.parse(b.createdAt) - Date.parse(a.createdAt));
            setPublicationsFeed(sortedArr);
            setPageInfo(response.data.explorePublications.pageInfo);
            return response.data.explorePublications.items;

        } catch (err) {
            console.log(err)
        }

    };

    useEffect( () => {

        fetchPublications();
        
    },[]);



    const fetchMorePublications = async () => {
        try {
            const response = await client.query(randomPublications, {
                request: {
                    sortCriteria: 'LATEST', 
                    publicationTypes: ['POST','MIRROR'], 
                    limit: 30,
                    noRandomize: true,
                    cursor: pageInfo.next,
                }
            }).toPromise();

            const arr = response.data.explorePublications.items;

            const sortedArr = arr.sort((a,b) => Date.parse(b.createdAt) - Date.parse(a.createdAt));
            setPublicationsFeed([...publicationsFeed, ...sortedArr]);
            setPageInfo(response.data.explorePublications.pageInfo);
            return response.data.explorePublications.items;

        } catch (err) {
            console.log(err)
        }
    };


    async function fetchLatestPublications() {
      try {
          const response = await client.query(randomPublications, {
              request: {
                  sortCriteria: 'LATEST', 
                  publicationTypes: ['POST'], 
                  limit: 30,
                  noRandomize: true,
              }
          }).toPromise();
          const arr = response.data.explorePublications.items;
          const sortedArr = arr.sort((a,b) => Date.parse(b.createdAt) - Date.parse(a.createdAt));
          setPublicationsFeed(sortedArr);
          setPageInfo(response.data.explorePublications.pageInfo);
          return response.data.explorePublications.items;

      } catch (err) {
          console.log(err)
      }

  };



  if(!data.isFeedOpen) return null;
  
  return(
    <Draggable cancel=".close, .minimise, .feed" enableUserSelectHack={false}>
        <div className="fixed flex items-center justify-center z-10 cursor-move top-1/2 left-1/2">

        { !data.minimise ? 
        <div className="absolute bg-lensLilac p-2 rounded-lg w-72 sm:w-96">
          <div className='close'>
          <AiFillCloseCircle 
          color='#00501e'
          className='item-center right-0 top-0 p-0 m-2 cursor-pointer absolute'
          onClick={data.handleFeedModal}
          />
          </div>
          <div className='minimise'>
          <VscChromeMinimize 
          color='#00501e'
          height={'2px'}
          className='item-center right-6 top-0 p-0 m-2 cursor-pointer absolute'
          onClick={data.handleMinimise}
          />
          </div>
          <h1 className="font-semibold text-center text-xl text-darkGreenLens mt-4 font-spacebold">
            Scroll Feed
          </h1>
          <div className='bg-darkGreenLens p-2 rounded-lg h-8 w-8 hover:opacity-80 cursor-pointer relative sm:left-[80px] sm:top-[3rem] left-[10px] top-[0.5rem]'>
          <FiRefreshCcw
          color='white'
          onClick={fetchLatestPublications}
           />
          </div>
          <feedApi.Provider
          value={{
            publicationsFeed: publicationsFeed,
            setPublicationsFeed: setPublicationsFeed,
            fetchMorePublications: fetchMorePublications,
            fetchPublications: fetchPublications
          }}
          >
          <FeedSearch />
          <div className="feed">
          <div className='bg-lensGrey cursor-auto p-6 mr-2 ml-2 rounded-lg mb-5 item-center h-96 overflow-auto select-text'>
          < Feed/>
          </div>
          </div>
          </feedApi.Provider>
        </div> 
        :
        <div className="absolute bg-lensLilac p-2 rounded-lg w-56">
        <div className='close'>
        <AiFillCloseCircle 
        color='#00501e'
        className='item-center right-5 top-[36%] p-0 cursor-pointer absolute'
        onClick={data.handleFeedModal}
        id="#close"
        />
        </div>
        <div className='minimise'>
        <HiArrowsExpand 
        color='#00501e'
        className='item-center top-[36%] right-10 p-0 cursor-pointer absolute'
        onClick={data.handleMinimise}
        />
        </div>
        <h1 className="font-semibold border-solid border rounded-lg	p-2 border-red-600 text-left text-xl text-darkGreenLens font-spacebold">
          OKAY BLOOMER
        </h1>
      </div> 
        }

        </div>
    </Draggable>
  )

}

export default FeedBox