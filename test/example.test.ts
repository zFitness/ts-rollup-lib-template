
test("parse", () => {
  const log = parse(
    '113.108.77.65 - - [24/Jun/2021:12:05:15 +0800] "GET / HTTP/1.1" 200 465 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36 Edg/91.0.864.54"'
  );
  console.log(log)
  expect(log.remotehost).toBe('113.108.77.65');
  expect(log.ident).toBe(null);
});
