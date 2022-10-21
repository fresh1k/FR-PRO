import './App.less';
import { Route, Routes }  from 'react-router-dom';
import  WeathersPage  from './pages/WeathersPage';
import WeatherDetailPage from './pages/WeatherDetailPage';


function App() {
    return (
        <div>
            <Routes>
                <Route path='/' element={
                    <WeathersPage>
                        <h1>Weathers Page</h1>
                    </WeathersPage>} />
                <Route path='/:cityName' element={<WeatherDetailPage />} />
            </Routes>
        </div>
  );
}

export default App;
