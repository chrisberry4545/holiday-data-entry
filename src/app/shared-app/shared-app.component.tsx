import { Component, Props } from 'react';
import * as React from 'react';
import './shared-app.component.scss';

import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import { Provider, Store } from 'react-redux';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import {
  ConnectedRouter,
  routerMiddleware,
  routerReducer,
} from 'react-router-redux';

import {
  RetrieveDataService,
} from './../../services';

import {
  AllDataInterface,
  StateInterface,
  URLS,
} from './../../models';

import {
  HolidayCreateComponent,
  HolidayDetailsComponent,
  HolidayEditComponent,
  HolidayListComponent,
  LandingComponent,
} from './../../pages';

import {
  reducer,
} from './../../store';

import createHistory from 'history/createBrowserHistory';

const history = createHistory();
const historyMiddleware = routerMiddleware(history);

const initStore = (initialState: StateInterface) => {
  return createStore<StateInterface>(
    combineReducers({
      main: reducer,
      router: routerReducer,
    }),
    initialState,
    applyMiddleware(historyMiddleware, thunk),
  );
};

interface SharedAppStateInterface {
  store: Store<StateInterface>;
}

export class SharedAppComponent
extends Component<Props<{}>, SharedAppStateInterface> {
  constructor(
    public props: Props<{}>,
  ) {
    super(props);
    this.state = {
      store: null,
    };
  }

  public componentDidMount() {
    new RetrieveDataService().getBackendData().then((data) => {
      const store = initStore({
        main: {
          data,
        },
      } as StateInterface);
      this.setState({ store });
    });
  }

  public render() {
    return this.state.store ? (
      <Provider store={ this.state.store }>
        <div>
          <ConnectedRouter history={ history }>
            <Route render={ ({ location }) => (
              <section>
                <Switch location={ location }>
                  <Route exact path={ `/${URLS.LANDING}` }
                    component={ LandingComponent } />
                  <Route exact path={ `/${URLS.HOLIDAYS_LIST}` }
                    component={ HolidayListComponent } />
                  <Route exact path={ `/${URLS.HOLIDAYS_DETAILS}/:id` }
                    component={ HolidayDetailsComponent } />
                  <Route exact path={ `/${URLS.HOLIDAYS_EDIT}/:id` }
                    component={ HolidayEditComponent } />
                  <Route exact path={ `/${URLS.HOLIDAYS_CREATE}/:id` }
                    component={ HolidayCreateComponent } />
                </Switch>
              </section>
            ) } />
          </ConnectedRouter>
        </div>
      </Provider>
    )
    :
    <div>Loading...</div>;
  }
}
