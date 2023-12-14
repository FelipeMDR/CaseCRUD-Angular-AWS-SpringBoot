package com.caseCRUD.controller;

import com.caseCRUD.entity.Lista;
import com.caseCRUD.repository.ListaRepository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
public class ListaController {
    
	@Autowired
    private ListaRepository listaRepository;
	
	@PostMapping("/lista")
    public Lista saveLista(@RequestBody Lista lista) {
        return listaRepository.save(lista);
    }

    @GetMapping("/lista/{id}")
    public Lista getLista(@PathVariable("id") String ID) {
        return listaRepository.getListaById(ID);
    }
    
    @GetMapping("/lista")
    public List<Lista> findAll() {
    	return listaRepository.findAll();
    }

    @DeleteMapping("/lista/{id}")
    public String deleteLista(@PathVariable("id") String ID){
        return listaRepository.delete(ID);
    }

    @PutMapping("/lista/{id}")
    public String updateLista(@PathVariable("id") String ID, @RequestBody Lista lista){
        return listaRepository.update(ID, lista);
    }

}
