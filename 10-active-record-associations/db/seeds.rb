Department.find_or_create_by(name: "Cardiology")
Department.find_or_create_by(name: "Neurology")
Department.find_or_create_by(name: "Oncology")

8.times do
	Doctor.find_or_create_by(
		name: Faker::Name.name, 
		department_id:  Faker::Number.between(from: 1, to: 3)
	)
end

8.times do
	Patient.find_or_create_by(
		name: Faker::Name.name, 
		age: Faker::Number.between(from: 1, to: 100)
	) 
end

15.times do
	Appointment.find_or_create_by(
		doctor_id: Faker::Number.between(from: 1, to: 8), 
		patient_id: Faker::Number.between(from: 1, to: 8), 
		time: Faker::Time.between(from: DateTime.now - 1, to: DateTime.now)
	)
end
