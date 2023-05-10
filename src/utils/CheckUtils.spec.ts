import { BadRequestException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';

import { isEmptyString } from './CheckUtils';

describe('check-util.ts', () => {
  it('should return a true  if empty', () => {
    const result = isEmptyString('');
    expect(result).toBe(true);
  });
  it('should return a true  if space', () => {
    const result = isEmptyString('     ');
    expect(result).toBe(true);
  });
  it('should return a true  if null', () => {
    const result = isEmptyString(null);
    expect(result).toBe(true);
  });
  it('should return a true  if undefined', () => {
    const result = isEmptyString(undefined);
    expect(result).toBe(false);
  });

  it('should return a false if string and length > 0', async () => {
    const result = isEmptyString('a');
    await expect(result).toBe(false);
  });
});
