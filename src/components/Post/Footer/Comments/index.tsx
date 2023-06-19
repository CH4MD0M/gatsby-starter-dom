import React, { useEffect, useRef } from 'react';

import { useAppSelector } from '@hooks/reduxHooks';
import { useSiteMetaData } from '@hooks/useSiteMetaData';

const src = 'https://utteranc.es/client.js';
const LIGHT_THEME = 'github-light';
const DARK_THEME = 'dark-blue';

const Comments = () => {
  const { themeMode } = useAppSelector(state => state.darkMode);
  const theme = themeMode === 'dark' ? DARK_THEME : LIGHT_THEME;

  const data = useSiteMetaData();
  const { repo } = data.site.siteMetadata.utterances;

  const rootElm = useRef<HTMLDivElement>(null);

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
        async: 'true',
      };

      Object.entries(utterancesConfig).forEach(([key, value]) => {
        utterances.setAttribute(key, value);
      });
      rootElm.current?.appendChild(utterances);
    };

    const postMessage = () => {
      const message = {
        type: 'set-theme',
        theme,
      };
      utterancesEl?.contentWindow?.postMessage(message, src);
    };

    const utterancesEl = rootElm.current?.querySelector<HTMLIFrameElement>(
      'iframe.utterances-frame',
    );
    utterancesEl ? postMessage() : createUtterances();
  }, [repo, theme]);

  return <div ref={rootElm} />;
};

export default Comments;
