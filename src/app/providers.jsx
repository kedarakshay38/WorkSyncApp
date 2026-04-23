import { QueryClient,QueryClientProvider } from "@tanstack/react-query";


                                                                              
//   React Query (TanStack Query)                                                  
            
//   ▎ Interview: React Query is a data-fetching and server state management       
//   ▎ library. It handles caching, background refetching, stale data management, 
//   ▎ and automatic retries. It separates server state (data from APIs) from      
//   ▎ client state (UI state like form inputs), solving problems that useState +
//   ▎ useEffect handle poorly — like cache invalidation, deduplication, and
//   ▎ optimistic updates.
//   ▎
//   ▎ Simple: Without React Query, fetching data looks like: create useState for  
//   ▎ data, loading, and error → call fetch inside useEffect → set all three 
//   ▎ states manually → repeat for every component. React Query does all of that  
//   ▎ in one line: useQuery({ queryKey, queryFn }). It also remembers (caches) the
//   ▎  data so if you visit the same page again, it shows instantly.

//   QueryClient                                                                   
            
//   ▎ Interview: QueryClient is the central manager of React Query. It holds the  
//   ▎ cache, manages query defaults (stale time, retry count), and orchestrates 
//   ▎ all queries and mutations in the app. It's created once and provided to the 
//   ▎ component tree via QueryClientProvider.
//   ▎
//   ▎ Simple: Think of it as the brain. You configure it once — "keep data fresh  
//   ▎ for 5 minutes, retry failed requests once" — and it applies those rules to 
//   ▎ every data fetch in your app automatically.                                 

//   staleTime                                                                     
            
//   ▎ Interview: staleTime defines how long fetched data is considered "fresh."   
//   ▎ During this time, React Query serves cached data without refetching. After 
//   ▎ staleTime expires, the data is "stale" and React Query will refetch in the  
//   ▎ background on the next access.
//   ▎
//   ▎ Simple: You check the weather at 9am. staleTime: 5 min means until 9:05am,  
//   ▎ you trust that result. After 9:05am, next time you check, it fetches fresh 
//   ▎ data.                                                                       




const queryClient=new QueryClient({
    defaultOptions:{
        queries:{
            staleTime:5*60*1000, //5 minutes in milliseconds
            retry:1, //retry failed request once
        },
    },
})

function Providers({children}){

return (
    <QueryClientProvider client={queryClient}>
        {children}
    </QueryClientProvider>
)
}

export default Providers