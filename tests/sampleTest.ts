fixture`Sample test`.meta({ fixtureID: 'f-0001', author: 'GDG', app: '' });

test.meta({
  testID: 't-0001',
  testType: 'Smoke',
})(
  'Sample test',
  async (t) => {
    await t.navigateTo('https://www.chegg.com//homework-help/questions-and-answers/east-university-eu-754-students-enrolled-math-1324-math-1325-535-enrolled-math-1324-257-en-q21691469?trackid=5fd398a8c83d&strackid=07caa782f378');
  }
);