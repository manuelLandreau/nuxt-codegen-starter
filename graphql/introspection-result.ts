export interface PossibleTypesResultData {
  possibleTypes: {
    [key: string]: string[]
  }
}
const result: PossibleTypesResultData = {
  possibleTypes: {
    FileFieldInterface: ['FileField'],
    RecordInterface: [
      'HomepageRecord',
      'ProfileRecord',
      'SocialRecord',
      'ThemeRecord',
    ],
  },
};
export default result;
