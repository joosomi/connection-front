// HTTP methods
const POST = 'POST';
const GET = 'GET';
const DELETE = 'DELETE';
const PATCH = 'PATCH';

// 백엔드 서버 API 목록
const API_LIST = {
    TEST_MULTIPLE_DATA: {
        method: GET,
        path: `/test/multiple-data`,
        desc: '테스트용 복수 데이터 요청',
    },
    TEST_SINGLE_DATA: {
        method: GET,
        path: `/test/single-data`,
        desc: '테스트용 단일 데이터 요청',
    },
    TEST_GREETING: {
        method: GET,
        path: `/test/greeting`,
        desc: '테스트용 이름 기반의 환영 인사',
    },
    USER_LOGIN: {
        method: POST,
        path: '/api/auth/login',
        desc: '사용자 로그인',
    },
    USER_SIGNUP: {
        method: POST,
        path: '/api/auth/signup',
        desc: '사용자 회원가입',
    },
    GET_SESSION_LIST: {
        method: GET,
        path: '/api/openvidu/sessions',
        desc: 'OpenVidu 현재 가용한 세션 조회',
    },
    RECEIVE_TRANSCRIPT: {
        method: POST,
        path: `/api/audio/receive-transcript`,
        desc: '사용자 텍스트 전송',
    },
    RECOMMEND_TOPICS: {
        method: POST,
        path: `/api/audio/recommend-topics`,
        desc: '주제 추천 요청',
    },
    CHECK_USERNAME: {
        method: POST,
        path: '/api/auth/check-username',
        desc: '회원가입 유저네임 중복 검사',
    },
    USER_DELETE: {
        method: DELETE,
        path: '/api/auth/account-deletion',
        desc: '유저 계정 탈퇴',
    },
    END_CALL: {
        method: POST,
        path: `/api/audio/end-call`,
        desc: '통화 종료 및 관심사 도출',
    },
    GET_TOKEN: {
        method: 'POST',
        path: `/api/openvidu/token`,
        desc: 'OpenVidu 토큰 발급',
    },
    GET_SESSION_DATA: {
        method: GET,
        path: `/api/user/session-data`,
        desc: '세션 데이터 조회',
    },
    AI_RECEIVE_TRANSCRIPT: {
        method: POST,
        path: `/api/audio/AIreceive-transcript`,
        desc: '사용자 텍스트 전송 및 AI 응답 받기',
    },
    END_USER_CONVERSATION: {
        method: POST,
        path: `/api/audio/clear-user-conversation`,
        desc: 'AI와 사용자 대화 기록 삭제',
    },
};

// OPEN API 목록
const OPEN_API_LIST = {
    GET_POKEMON_PICTURE: (id) => ({
        method: GET,
        path: `https://pokeapi.co/api/v2/pokemon/${id}`,
        desc: '랜덤 포켓몬 사진 조회',
    }),
};

export { API_LIST, OPEN_API_LIST };
