# ActiveRecord Associations

## Review

- What is an ORM?
- What is Rake?
- What are the different files/folders good for?
- How do we create a new migration? How do we migrate?

## Associations

1. Doctor
  - Belongs to a department
  - Has many appointments and patients
2. Department
  - Has many doctors
3. Patient
  - Has many appointments and doctors
  - BONUS: Has many departments
4. Appointment
  - Belongs to doctor and patient