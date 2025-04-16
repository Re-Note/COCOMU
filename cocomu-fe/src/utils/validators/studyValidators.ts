import ValidationError from '@utils/errors/ValidationError';

const isEmptyString = (value: string) => !value;

const isEmptyArray = (value: number[]) => value.length === 0;

export const validateName = {
  onBlur: (name: string) => {
    if (isEmptyString(name)) {
      throw new ValidationError({ inputName: 'name', message: '스터디 이름을 입력해주세요.' });
    }

    if (name.length < 2 || name.length > 100) {
      throw new ValidationError({
        inputName: 'name',
        message: '스터디 이름은 최소 2자 이상 최대 100자 이하여야 합니다.',
      });
    }
  },
};

export const validatePassword = {
  onBlur: (password: string) => {
    if (isEmptyString(password)) {
      throw new ValidationError({ inputName: 'password', message: '암호를 입력해주세요.' });
    }

    if (!Number.isFinite(Number(password))) {
      throw new ValidationError({ inputName: 'password', message: '암호는 숫자만 입력할 수 있습니다.' });
    }

    if (password.length < 4 || password.length > 6) {
      throw new ValidationError({ inputName: 'password', message: '암호는 4~6자리여야 합니다.' });
    }
  },
};

export const validateTotalUserCount = {
  onBlur: (totalUserCount: string) => {
    if (isEmptyString(totalUserCount)) {
      throw new ValidationError({ inputName: 'totalUserCount', message: '모집 인원을 입력해주세요.' });
    }

    if (!Number.isFinite(Number(totalUserCount))) {
      throw new ValidationError({ inputName: 'totalUserCount', message: '모집 인원은 숫자만 입력할 수 있습니다.' });
    }

    const count = Number(totalUserCount);

    if (count < 2 || count > 50) {
      throw new ValidationError({ inputName: 'totalUserCount', message: '모집 인원은 2~50명 사이여야 합니다.' });
    }
  },
};

export const validateLanguages = {
  onBlur: (languages: number[]) => {
    if (isEmptyArray(languages)) {
      throw new ValidationError({ inputName: 'languages', message: '사용할 언어를 하나 이상 선택해야 합니다.' });
    }
  },
};

export const validateJudges = {
  onBlur: (workbooks: number[]) => {
    if (isEmptyArray(workbooks)) {
      throw new ValidationError({ inputName: 'workbooks', message: '사용할 플랫폼을 하나 이상 선택해야 합니다.' });
    }
  },
};
