import React from 'react'
import { 
  HotelFamilySection,
  HotelFooter,
  HotelHeroSection, 
  HotelLivingRooms, 
  HotelNavBar, 
  HotelsWithLargeRooms, 
  MorePickedHotels 
} from '../components'

const Hotel = () => {
  return (
    <>
        <HotelNavBar />
        <HotelHeroSection />
        <MorePickedHotels />
        <HotelLivingRooms />
        <HotelsWithLargeRooms />
        <HotelLivingRooms />
        <HotelFamilySection />
        <HotelFooter />
    </>
  )
}

export default Hotel;