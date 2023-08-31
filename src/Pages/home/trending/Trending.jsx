import {useState} from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import SwitchTabs from '../../../components/switchTabs/switchTabs'
import useFetch from '../../../hooks/useFetch'
import Carousel from '../../../components/Carousel/Carousel'


function Trending() {
  const [endpoint, setEndpoint] = useState("day")

  const {data,loading} = useFetch(`/trending/movie/${endpoint}`);

  const onTabChange=(tab)=>{
 setEndpoint(tab === "Day" ? "day":"week")
  }
  return (
    <div  className='carouselSection'>
      <ContentWrapper>
        <span className="carouselTitle">Trending</span>
        <SwitchTabs data={["Day","Week"]} onTabChange={onTabChange}/>
      </ContentWrapper>
     <Carousel data={data?.results} loading={loading}/>
    </div>
  )
}

export default Trending
