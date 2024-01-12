package at.technikum.passwordgenerator;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/passwords")
@CrossOrigin(origins = "*")
public class PasswordController {

    private PasswordService passwordService;

    @Autowired
    public PasswordController(PasswordService passwordService) {
        this.passwordService = passwordService;
    }

    @GetMapping
    public ResponseEntity<List<String>> generatePasswords(@RequestParam int count) {
        List<String> passwords = passwordService.generatePasswords(count);
        return ResponseEntity.ok(passwords);
    }
}
