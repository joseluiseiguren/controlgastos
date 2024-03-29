﻿using Shared.Enums;
using Shared.Execptions;
using System;
using System.ComponentModel.DataAnnotations;

namespace Domain.Model
{
    public class User : ModelBase
    {
        public int InvalidLoginAttempts { get; private set; }

        public string Email { get; private set; }

        public string Name { get; private set; }

        public DateOnly BornDate { get; private set; }

        public int StatusId { get; private set; }

        public string Currency { get; private set; }

        public string Password { get; private set; }

        public DateTime EntryDate { get; private set; }

        public string Language { get; private set; }

        public User()
        {
        }

        public User(string id, 
                    int invalidLoginAttempts, 
                    string email, 
                    string name,
                    DateOnly bornDate, 
                    int statusId, 
                    string currency, 
                    string password, 
                    DateTime entryDate,
                    string language)
        {
            UpdateId(id);
            UpdateInvalidLoginAttempts(invalidLoginAttempts);
            UpdateEmail(email);
            UpdateStatus(statusId);
            UpdateName(name);
            UpdateBornDate(bornDate);
            UpdateCurrecny(currency);
            UpdateEntryDate(entryDate);
            UpdatePassword(password);
            UpdateLanguage(language);
        }

        public void UpdateInvalidLoginAttempts(int invalidLoginAttempts)
        {
            if (invalidLoginAttempts < 0)
            {
                throw new BusinessException($"InvalidLoginAttempts is invalid: {invalidLoginAttempts}");
            }

            this.InvalidLoginAttempts = invalidLoginAttempts;
        }

        public void UpdateLanguage(string language)
        {
            if (string.IsNullOrEmpty(language) || language.Length != 2)
            {
                throw new BusinessException($"Language is invalid: {language}");
            }

            this.Language = language;
        }

        public void UpdateEmail(string email)
        {
            if (!new EmailAddressAttribute().IsValid(email))
            {
                throw new BusinessException($"Email is invalid: {email}");
            }
            
            this.Email = email;
        }

        public void UpdateName(string name)
        {
            if (string.IsNullOrEmpty(name))
            {
                throw new BusinessException($"Name is invalid: {name}");
            }

            this.Name = name;
        }

        public void UpdatePassword(string password)
        {
            if (string.IsNullOrEmpty(password))
            {
                throw new BusinessException($"Password is invalid: {password}");
            }

            this.Password = password;
        }

        public void UpdateCurrecny(string currency)
        {
            if (string.IsNullOrEmpty(currency) ||currency.Length > 5)
            {
                throw new BusinessException($"Currency is invalid: {currency}");
            }

            this.Currency = currency;
        }

        public void UpdateStatus(int statusId)
        {
            if (!Enum.IsDefined(typeof(UserStatus), statusId))
            {
                throw new BusinessException($"StatusId is invalid: {statusId}");
            }

            this.StatusId = statusId;
        }

        public void UpdateBornDate(DateOnly bornDate)
        {
            if (bornDate == DateOnly.MinValue || bornDate == DateOnly.MaxValue)
            {
                throw new BusinessException($"BornDate is invalid: {bornDate}");
            }

            this.BornDate = bornDate;
        }

        public void UpdateEntryDate(DateTime entryDate)
        {
            if (entryDate == DateTime.MinValue || entryDate == DateTime.MaxValue)
            {
                throw new BusinessException($"EntryDate is invalid: {entryDate}");
            }

            this.EntryDate = entryDate;
        }


    }
}
