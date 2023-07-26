import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '30s', target: 250 },
    { duration: '1m30s', target: 125 },
    { duration: '20s', target: 0 },
  ],
};

export default function () {
  const response = http.get('http://localhost:3333');
  check(response, (res) => res.status == 200);
  sleep(0.5);
}