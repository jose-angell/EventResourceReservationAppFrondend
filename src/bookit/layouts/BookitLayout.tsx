import { Outlet } from "react-router"
import CustomHeader from "../Components/CustomHeader"


export const BookitLayout = () => {
  return (
    <div className="min-h-screen bg-background">
        <CustomHeader />
        <Outlet/>
    </div>
  )
}
