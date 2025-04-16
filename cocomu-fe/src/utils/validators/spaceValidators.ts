import ValidationError from '@utils/errors/ValidationError';

const isEmptyString = (value: string) => !value;
const isEmptyArray = (value: string[]) => value.length === 0;

export const validateName = {
  onBlur: (name: string) => {
    if (isEmptyString(name)) {
      throw new ValidationError({ inputName: 'name', message: '스터디 이름을 입력해주세요.' });
    }
  },
};

export const validateReferenceUrl = {
  onBlur: (referenceUrl: string) => {
    if (isEmptyString(referenceUrl)) {
      throw new ValidationError({ inputName: 'referenceUrl', message: '출처를 입력해주세요.' });
    }
  },
};

export const validateTotalUserCount = {
  onBlur: (totalUserCount: string[]) => {
    if (isEmptyArray(totalUserCount)) {
      throw new ValidationError({ inputName: 'totalUserCount', message: '모집 인원을 입력해주세요.' });
    }
  },
};

export const validateLanguage = {
  onBlur: (language: string[]) => {
    if (isEmptyArray(language)) {
      throw new ValidationError({ inputName: 'language', message: '사용할 언어를 하나 이상 선택해야 합니다.' });
    }
  },
};
