import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

import { useSiteMetaData } from '../../../../hooks/useSiteMetaData';

// CSS
import * as S from './style';

const src = 'https://utteranc.es/client.js';
const LIGHT_THEME = 'github-light';
const DARK_THEME = 'dark-blue';

const Comments = () => {
  const { themeMode } = useSelector(state => state.ui);
  const theme = themeMode === 'dark' ? DARK_THEME : LIGHT_THEME;
  const data = useSiteMetaData();
  const { repo } = data.site.siteMetadata.utterances;

  const rootElm = useRef(null);

  useEffect(() => {
    const createUtterances = () => {
      const utterances = document.createElement('script');
      const utterancesConfig = {
        src,
        repo,
        branch: 'main',
        label: 'comment',
        theme,
        'issue-term': 'pathname',
        crossorigin: 'anonymous',
        async: true,
      };

      Object.entries(utterancesConfig).forEach(([key, value]) => {
        utterances.setAttribute(key, value);
      });
      rootElm.current.appendChild(utterances);
    };

    const postMessage = () => {
      const message = {
        type: 'set-theme',
        theme,
      };
      utterancesEl.contentWindow.postMessage(message, src);
    };

    const utterancesEl = rootElm.current.querySelector(
      'iframe.utterances-frame',
    );
    utterancesEl ? postMessage() : createUtterances();
  }, [repo, themeMode]);

  return (
    <S.CommentWrapper>
      <div ref={rootElm} />
    </S.CommentWrapper>
  );
};

export default Comments;
