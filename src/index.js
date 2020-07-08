import React from 'react';
import { render } from 'react-dom';
import { App } from './App';
import './styles.css'
import { SelectedArticleProvider, ArticlesProvider, FirebaseProvider, AuthUserProvider } from './context';

render(
  <FirebaseProvider>
    <AuthUserProvider>
      <ArticlesProvider>
        <SelectedArticleProvider>
          <App />
        </SelectedArticleProvider>
      </ArticlesProvider>
    </AuthUserProvider>
  </FirebaseProvider>
  ,
  document.getElementById('root')
);