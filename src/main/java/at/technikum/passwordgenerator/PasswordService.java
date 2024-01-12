package at.technikum.passwordgenerator;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

@Service
public class PasswordService {
    private final PasswordGenerator passwordGenerator;

    @Autowired
    public PasswordService(PasswordGenerator passwordGenerator) {
        this.passwordGenerator = passwordGenerator;
    }

    public List<String> generatePasswords(int count) {
        return IntStream.range(0, count)
                .mapToObj(i -> passwordGenerator.generatePassword())
                .collect(Collectors.toList());
    }
}
