import { useState } from 'react'
import './App.css'
import LayoutSelectorButton from './components/LayoutSelectorButton'
import ThreeColumnFeed from './layouts/ThreeColumnFeed';
import SidebarAndContent from './layouts/SidebarAndContent';
import FilterAndGrid from './layouts/FilterAndGrid';
import MapAndListSplit from './layouts/MapAndListSplit';
import CRMRecordDetails from './layouts/CRMRecordDetails';

function App() {
    const [currentSelectedLayout, setCurrentSelectedLayout] = useState<string>('3-Column Feed');
    const layoutList = [
      '3-Column Feed',
      'Sidebar + Content',
      'Filter + Grid',
      'Map + List Split',
      'Dashboard KPI',
      'CRM Record Detail',
      'Data Table',
      'Kanban Board',
      'Chat/Messanger',
      'Profile + Feed',
      'Search Results',
      'Video Player',
      'E-Commerce PDP',
      'Live Score',
      'Settings Page',
      'Calender',
      'Form Builder'
    ]

    const getCurrentLayout = (layoutString: string) => {
      switch(layoutString){
        case '3-Column Feed':
          return <ThreeColumnFeed />
        
        case 'Sidebar + Content':
          return <SidebarAndContent />

        case 'Filter + Grid':
          return <FilterAndGrid />

        case 'Map + List Split':
          return <MapAndListSplit />

        case 'CRM Record Detail':
          return <CRMRecordDetails />

        default:
          return <ThreeColumnFeed />
      }
    }

    return (<div className='w-full h-full flex flex-col'>
      <div className='text-xs h-14 border-b border-neutral-200 flex items-center px-4 gap-2 overflow-x-auto shrink-0'>
        Layouts:
        {
          layoutList.map((val, index) => {
            return <LayoutSelectorButton onClick={() => setCurrentSelectedLayout(val)} isSelected={currentSelectedLayout === val} key={index}>{val}</LayoutSelectorButton>
          })
        }
      </div>
      <div className='flex flex-1'>
        {
          getCurrentLayout(currentSelectedLayout)
        }
      </div>
    </div>)
}

export default App
