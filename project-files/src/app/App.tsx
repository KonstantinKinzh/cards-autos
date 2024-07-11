import { observer } from 'mobx-react';
import { useEffect } from 'react';
import { fetchData } from '@/server/api';
import { CardsAuto } from '@/components/cards-auto';
import { Header } from '@/components/header';
import { PopupEditData } from '@/components/popupEditData';
import { Maps } from '@/components/maps';
import { dataServerStore } from '@/stores/dataServerStore/dataServerStore';
import { popupStore } from '@/stores/popupStore/popupStore';
import './App.css';

const App = observer(() => {
  const autos = dataServerStore.autos;
  const isOpenMap = dataServerStore.isOpenMap;
  const isOpenPopup = popupStore.isOpenPopup;

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="app">
      {isOpenPopup && <PopupEditData />}
      {isOpenMap && <Maps />}

      <Header />

      <div className="app-inner">
        {autos.map((auto) => (
          <div
            key={auto.id} >
            <CardsAuto
              id={auto.id}
              mark={auto.mark}
              model={auto.model}
              color={auto.color}
              price={auto.price}
              year={auto.year}
            />
          </div>
        ))}
      </div>

    </div>
  );
});

export default App;