export default {
    '91porn.com': {
        _name: '91porn',
        '.': [
            {
                title: '今日排行',
                docs: 'https://docs.rsshub.app/routes/multimedia#91porn',
                source: ['/index.php'],
                target: '/91porn',
            },
            {
                title: '作者',
                docs: 'https://docs.rsshub.app/routes/multimedia#91porn',
                source: ['/uvideos.php'],
                target: (_params, url) => `/91porn/author/${new URL(url).searchParams.get('UID')}`,
            },
        ],
    },
};
