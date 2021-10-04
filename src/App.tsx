import React, {useEffect} from 'react';
import './App.css';

import CssBaseline from '@material-ui/core/CssBaseline'
import EnhancedTable from './components/EnhancedTable'
import { format } from 'date-fns';
import makeData from './makeData'

const App = () => {
  const columns = React.useMemo(
      () => [
        {
          Header: 'Title',
          accessor: 'title',
        },
        {
          Header: 'Published',
          accessor: 'published',
        },
        {
          Header: 'Site',
          accessor: 'site',
        },
        {
          Header: 'Ad group',
          accessor: 'adGroup',
        },
        {
          Header: 'Bids',
          accessor: 'bids',
        },
        {
          Header: 'Spending',
          accessor: 'spending',
        },
        {
          Header: 'Win rate',
          accessor: 'winRate',
        },
        {
          Header: 'Impressions',
          accessor: 'impressions',
        },
        {
          Header: 'Clicks',
          accessor: 'clicks',
        },
        {
          Header: 'CTR',
          accessor: 'ctr',
        },
      ],
      []
  )

  let [data, setData] = React.useState(React.useMemo(() => makeData(0), []))

  const [skipPageReset, setSkipPageReset] = React.useState(false)

  // We need to keep the table from resetting the pageIndex when we
  // Update data. So we can keep track of that flag with a ref.

  // When our cell renderer calls updateMyData, we'll use
  // the rowIndex, columnId and new value to update the
  // original data
  const updateMyData = (rowIndex, columnId, value) => {
    // We also turn on the flag to not reset the page
    setSkipPageReset(true)
    setData(old =>
        old.map((row, index) => {
          if (index === rowIndex) {
            return {
              ...old[rowIndex],
              [columnId]: value,
            }
          }
          return row
        })
    )
  }

  useEffect(() => {
      fetch("http://localhost:8080/articles")
          .then(res => res.json())
          .then(
              (result) => {
                  result.map((row, index) => {
                      row.published = formatDate(row.published);
                      row.spending = 'kr ' + row.spending;
                      row.winRate = row.winRate + '%';
                      row.ctr = row.ctr + '%';
                  });
                  setData(result);
              },
              (error) => {
                  console.error(error);
              }
          )
  }, [data.length]);

  const formatDate = (date) => {
      return format(new Date(date), 'dd.MM.yyyy');
  }


  return (
      <div>
        <CssBaseline />
        <EnhancedTable
            columns={columns}
            data={data}
            setData={setData}
            updateMyData={updateMyData}
            skipPageReset={skipPageReset}
        />
      </div>
  )
}

export default App;
