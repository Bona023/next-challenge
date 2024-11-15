export const USERNAME_MIN_LENGTH = 3;
export const USERNAME_MAX_LENGTH = 20;
export const PASSWORD_MIN_LENGTH = 4;
export const PASSWORD_REGEX = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*?[#?!@$%^&*-]).+$/);
export const PASSWORD_REGEX_ERROR = "비밀번호는 대문자, 소문자, 숫자, 특수문자(#?!@$%^&*-)를 모두 1개 이상 포함해야 합니다.";
